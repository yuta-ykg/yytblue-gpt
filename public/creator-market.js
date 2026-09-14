// Personal, free-point simulation. No cash, payouts, or shared order book.
globalThis.CreatorMarket = {
  prices: { nagi: 100, sota: 150, haru: 80, mio: 120 },
  initialSupply: 1000,
  maxSupply: 2100000000,
  initial() {
    return {
      balance: 10000,
      prices: { ...this.prices },
      holdings: {},
      supplies: Object.fromEntries(
        Object.keys(this.prices).map((id) => [id, this.initialSupply]),
      ),
      classSupplies: Object.fromEntries(
        Object.keys(this.prices).map((id) => [id, 0]),
      ),
      classPrices: { ...this.prices },
      classHoldings: Object.fromEntries(
        Object.keys(this.prices).map((id) => [id, 0]),
      ),
      classBrands: Object.fromEntries(
        Object.keys(this.prices).map((id) => [id, { name: `${id.toUpperCase()} Class`, image: null }]),
      ),
      splitVotes: Object.fromEntries(
        Object.keys(this.prices).map((id) => [
          id,
          {
            yes: 0,
            no: 0,
            choice: null,
            weight: 0,
            ratio: 2,
            mode: null,
            requested: false,
            requesterWeight: 0,
            round: 1,
            revoteUsed: false,
          },
        ]),
      ),
      classSplitVotes: Object.fromEntries(
        Object.keys(this.prices).map((id) => [
          id,
          { yes: 0, no: 0, choice: null, weight: 0, ratio: 2, mode: null, requested: false, requesterWeight: 0, round: 1, revoteUsed: false },
        ]),
      ),
      history: [],
    };
  },
  trade(state, creator, side, quantity) {
    const price = state.prices?.[creator] || this.prices[creator];
    if (
      !price ||
      !["buy", "sell"].includes(side) ||
      !Number.isSafeInteger(quantity) ||
      quantity < 1 ||
      quantity > 100
    )
      throw Error("quantity");
    const held = state.holdings[creator] || 0;
    const supply = state.supplies[creator] || this.initialSupply;
    const available = supply - held;
    const total = price * quantity;
    if (side === "buy" && quantity > available) throw Error("supply");
    if (side === "buy" && state.balance < total) throw Error("balance");
    if (side === "sell" && held < quantity) throw Error("holdings");
    return {
      ...state,
      balance: state.balance + (side === "buy" ? -total : total),
      holdings: {
        ...state.holdings,
        [creator]: held + (side === "buy" ? quantity : -quantity),
      },
      history: [
        { creator, side, quantity, total, at: Date.now() },
        ...state.history,
      ].slice(0, 100),
    };
  },
  voteSplit(state, creator, choice) {
    if (!this.prices[creator] || !["yes", "no"].includes(choice))
      throw Error("vote");
    const held = state.holdings[creator] || 0;
    if (held < 1) throw Error("not_holder");
    const current = state.splitVotes[creator];
    if (!current.requested) throw Error("not_requested");
    if (current.choice) throw Error("voted");
    return {
      ...state,
      splitVotes: {
        ...state.splitVotes,
        [creator]: {
          ...current,
          [choice]: current[choice] + held,
          choice,
          weight: held,
        },
      },
    };
  },
  requestSplitVote(state, creator, ratio, mode) {
    if (
      !this.prices[creator] ||
      !Number.isSafeInteger(ratio) ||
      ratio < 2 ||
      ratio > 200 ||
      !["solo", "joint"].includes(mode)
    )
      throw Error("request");
    const current = state.splitVotes[creator];
    if (current.requested) throw Error("already_requested");
    const held = state.holdings[creator] || 0;
    const supply = state.supplies[creator] || this.initialSupply;
    const required = Math.ceil(supply * (mode === "solo" ? 0.01 : 0.03));
    if (held < required) throw Error("request_power");
    return {
      ...state,
      splitVotes: {
        ...state.splitVotes,
        [creator]: {
          ...current,
          ratio,
          mode,
          requested: true,
          requesterWeight: held,
        },
      },
    };
  },
  requestRevote(state, creator) {
    if (!this.prices[creator]) throw Error("revote");
    const current = state.splitVotes[creator];
    if (!current.requested) throw Error("not_requested");
    if (current.revoteUsed) throw Error("revote_used");
    if (current.yes + current.no < 1) throw Error("no_votes");
    const held = state.holdings[creator] || 0;
    const supply = state.supplies[creator] || this.initialSupply;
    if (held < Math.ceil(supply * 0.34)) throw Error("revote_power");
    return {
      ...state,
      splitVotes: {
        ...state.splitVotes,
        [creator]: {
          ...current,
          yes: 0,
          no: 0,
          choice: null,
          weight: 0,
          round: 2,
          revoteUsed: true,
        },
      },
    };
  },
  issueClassShares(state, creator, quantity) {
    if (
      !this.prices[creator] ||
      !Number.isSafeInteger(quantity) ||
      quantity < 1
    )
      throw Error("class_quantity");
    const commonSupply = state.supplies[creator] || this.initialSupply;
    const issued = state.classSupplies?.[creator] || 0;
    const limit = Math.floor((commonSupply * 2) / 3);
    if (quantity > limit - issued) throw Error("class_limit");
    return {
      ...state,
      classSupplies: {
        ...(state.classSupplies || {}),
        [creator]: issued + quantity,
      },
      classHoldings: {
        ...(state.classHoldings || {}),
        [creator]: (state.classHoldings?.[creator] || 0) + quantity,
      },
    };
  },
  updateClassBrand(state, creator, name, image) {
    const cleanName = typeof name === "string" ? name.trim() : "";
    if (!this.prices[creator] || !cleanName || [...cleanName].length > 30) throw Error("class_brand");
    const current = state.classBrands?.[creator] || {};
    return { ...state, classBrands: { ...(state.classBrands || {}), [creator]: { name: cleanName, image: typeof image === "string" && image ? image : current.image || null } } };
  },
  voteClassSplit(state, creator, choice) {
    if (!this.prices[creator] || !["yes", "no"].includes(choice)) throw Error("vote");
    const held = state.classHoldings?.[creator] || 0;
    if (held < 1) throw Error("not_holder");
    const current = state.classSplitVotes[creator];
    if (!current.requested) throw Error("not_requested");
    if (current.choice) throw Error("voted");
    return { ...state, classSplitVotes: { ...state.classSplitVotes, [creator]: { ...current, [choice]: current[choice] + held, choice, weight: held } } };
  },
  requestClassSplitVote(state, creator, ratio, mode) {
    if (!this.prices[creator] || !Number.isSafeInteger(ratio) || ratio < 2 || ratio > 200 || !["solo", "joint"].includes(mode)) throw Error("request");
    const current = state.classSplitVotes[creator];
    if (current.requested) throw Error("already_requested");
    const held = state.classHoldings?.[creator] || 0;
    const supply = state.classSupplies?.[creator] || 0;
    const required = Math.ceil(supply * (mode === "solo" ? 0.01 : 0.03));
    if (supply < 1 || held < Math.max(1, required)) throw Error("request_power");
    return { ...state, classSplitVotes: { ...state.classSplitVotes, [creator]: { ...current, ratio, mode, requested: true, requesterWeight: held } } };
  },
  requestClassRevote(state, creator) {
    if (!this.prices[creator]) throw Error("revote");
    const current = state.classSplitVotes[creator];
    if (!current.requested) throw Error("not_requested");
    if (current.revoteUsed) throw Error("revote_used");
    if (current.yes + current.no < 1) throw Error("no_votes");
    const held = state.classHoldings?.[creator] || 0;
    const supply = state.classSupplies?.[creator] || 0;
    if (held < Math.ceil(supply * 0.34)) throw Error("revote_power");
    return { ...state, classSplitVotes: { ...state.classSplitVotes, [creator]: { ...current, yes: 0, no: 0, choice: null, weight: 0, round: 2, revoteUsed: true } } };
  },
  executeClassSplit(state, creator) {
    if (!this.prices[creator]) throw Error("split");
    const current = state.classSplitVotes[creator];
    const totalVotes = current.yes + current.no;
    if (!current.requested || totalVotes < 1 || current.yes <= current.no) throw Error("not_approved");
    const ratio = current.ratio;
    const supply = state.classSupplies?.[creator] || 0;
    const commonSupply = state.supplies[creator] || this.initialSupply;
    if (supply * ratio > Math.floor((commonSupply * 2) / 3)) throw Error("class_limit");
    return {
      ...state,
      classPrices: { ...(state.classPrices || this.prices), [creator]: Number(((state.classPrices?.[creator] || state.prices?.[creator] || this.prices[creator]) / ratio).toFixed(8)) },
      classSupplies: { ...state.classSupplies, [creator]: supply * ratio },
      classHoldings: { ...state.classHoldings, [creator]: (state.classHoldings?.[creator] || 0) * ratio },
      classSplitVotes: { ...state.classSplitVotes, [creator]: { yes: 0, no: 0, choice: null, weight: 0, ratio: 2, mode: null, requested: false, requesterWeight: 0, round: 1, revoteUsed: false } },
    };
  },
  executeSplit(state, creator) {
    if (!this.prices[creator]) throw Error("split");
    const current = state.splitVotes[creator];
    const totalVotes = current.yes + current.no;
    if (!current.requested || totalVotes < 1 || current.yes <= current.no)
      throw Error("not_approved");
    const ratio = current.ratio;
    const supply = state.supplies[creator] || this.initialSupply;
    if (supply * ratio > this.maxSupply) throw Error("supply_cap");
    const held = state.holdings[creator] || 0;
    const price = state.prices?.[creator] || this.prices[creator];
    return {
      ...state,
      prices: {
        ...(state.prices || this.prices),
        [creator]: Number((price / ratio).toFixed(8)),
      },
      holdings: { ...state.holdings, [creator]: held * ratio },
      supplies: { ...state.supplies, [creator]: supply * ratio },
      splitVotes: {
        ...state.splitVotes,
        [creator]: {
          yes: 0,
          no: 0,
          choice: null,
          weight: 0,
          ratio: 2,
          mode: null,
          requested: false,
          requesterWeight: 0,
          round: 1,
          revoteUsed: false,
        },
      },
    };
  },
  restore(value) {
    if (
      !value ||
      !Number.isFinite(value.balance) ||
      value.balance < 0 ||
      !value.holdings ||
      !Array.isArray(value.history)
    )
      return this.initial();
    const holdings = {};
    const prices = {};
    const supplies = {};
    const classSupplies = {};
    const classPrices = {};
    const classHoldings = {};
    const classBrands = {};
    const splitVotes = {};
    const classSplitVotes = {};
    for (const id of Object.keys(this.prices)) {
      const n = value.holdings[id] || 0;
      if (!Number.isSafeInteger(n) || n < 0) return this.initial();
      holdings[id] = n;
      const savedPrice = value.prices?.[id];
      prices[id] =
        Number.isFinite(savedPrice) && savedPrice > 0
          ? savedPrice
          : this.prices[id];
      const savedSupply = value.supplies?.[id];
      const supply = Number.isSafeInteger(savedSupply)
        ? savedSupply
        : Math.max(this.initialSupply, n);
      if (supply < n || supply < 1 || supply > this.maxSupply)
        return this.initial();
      supplies[id] = supply;
      const savedClassSupply = value.classSupplies?.[id] || 0;
      const classLimit = Math.floor((supply * 2) / 3);
      classSupplies[id] =
        Number.isSafeInteger(savedClassSupply) &&
        savedClassSupply >= 0 &&
        savedClassSupply <= classLimit
          ? savedClassSupply
          : 0;
      const savedClassPrice = value.classPrices?.[id];
      classPrices[id] = Number.isFinite(savedClassPrice) && savedClassPrice > 0 ? savedClassPrice : prices[id];
      const savedClassHolding =
        value.classHoldings?.[id] ?? savedClassSupply;
      classHoldings[id] =
        Number.isSafeInteger(savedClassHolding) &&
        savedClassHolding >= 0 &&
        savedClassHolding <= classSupplies[id]
          ? savedClassHolding
          : 0;
      const savedBrand = value.classBrands?.[id];
      classBrands[id] = {
        name: typeof savedBrand?.name === "string" && savedBrand.name.trim() ? savedBrand.name.trim().slice(0, 30) : `${id.toUpperCase()} Class`,
        image: typeof savedBrand?.image === "string" && savedBrand.image ? savedBrand.image : null,
      };
      const savedVote = value.splitVotes?.[id];
      const restoredVote =
        savedVote &&
        Number.isSafeInteger(savedVote.yes) &&
        savedVote.yes >= 0 &&
        Number.isSafeInteger(savedVote.no) &&
        savedVote.no >= 0 &&
        [null, "yes", "no"].includes(savedVote.choice) &&
        Number.isSafeInteger(savedVote.weight) &&
        savedVote.weight >= 0
          ? savedVote
          : { yes: 0, no: 0, choice: null, weight: 0 };
      splitVotes[id] = {
        ...restoredVote,
        ratio:
          Number.isSafeInteger(restoredVote.ratio) &&
          restoredVote.ratio >= 2 &&
          restoredVote.ratio <= 200
            ? restoredVote.ratio
            : 2,
        mode: ["solo", "joint"].includes(restoredVote.mode)
          ? restoredVote.mode
          : null,
        requested:
          typeof restoredVote.requested === "boolean"
            ? restoredVote.requested
            : restoredVote.yes + restoredVote.no > 0 ||
              restoredVote.choice !== null,
        requesterWeight: Number.isSafeInteger(restoredVote.requesterWeight)
          ? restoredVote.requesterWeight
          : 0,
        round: restoredVote.round === 2 ? 2 : 1,
        revoteUsed:
          typeof restoredVote.revoteUsed === "boolean"
            ? restoredVote.revoteUsed
            : restoredVote.round === 2,
      };
      const savedClassVote = value.classSplitVotes?.[id];
      const restoredClassVote =
        savedClassVote &&
        Number.isSafeInteger(savedClassVote.yes) && savedClassVote.yes >= 0 &&
        Number.isSafeInteger(savedClassVote.no) && savedClassVote.no >= 0 &&
        [null, "yes", "no"].includes(savedClassVote.choice) &&
        Number.isSafeInteger(savedClassVote.weight) && savedClassVote.weight >= 0
          ? savedClassVote
          : { yes: 0, no: 0, choice: null, weight: 0 };
      classSplitVotes[id] = {
        ...restoredClassVote,
        ratio: Number.isSafeInteger(restoredClassVote.ratio) && restoredClassVote.ratio >= 2 && restoredClassVote.ratio <= 200 ? restoredClassVote.ratio : 2,
        mode: ["solo", "joint"].includes(restoredClassVote.mode) ? restoredClassVote.mode : null,
        requested: typeof restoredClassVote.requested === "boolean" ? restoredClassVote.requested : false,
        requesterWeight: Number.isSafeInteger(restoredClassVote.requesterWeight) ? restoredClassVote.requesterWeight : 0,
        round: restoredClassVote.round === 2 ? 2 : 1,
        revoteUsed: typeof restoredClassVote.revoteUsed === "boolean" ? restoredClassVote.revoteUsed : restoredClassVote.round === 2,
      };
    }
    return {
      balance: value.balance,
      prices,
      holdings,
      supplies,
      classSupplies,
      classPrices,
      classHoldings,
      classBrands,
      splitVotes,
      classSplitVotes,
      history: value.history
        .filter(
          (t) =>
            this.prices[t.creator] &&
            ["buy", "sell"].includes(t.side) &&
            Number.isSafeInteger(t.quantity) &&
            Number.isFinite(t.total) &&
            Number.isFinite(t.at),
        )
        .slice(0, 100),
    };
  },
};
