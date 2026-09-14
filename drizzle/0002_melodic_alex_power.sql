CREATE TABLE `game_rooms` (
	`id` text PRIMARY KEY NOT NULL,
	`game` text NOT NULL,
	`visibility` text DEFAULT 'public' NOT NULL,
	`code_hash` text,
	`host_id` text NOT NULL,
	`guest_id` text,
	`state` text NOT NULL,
	`status` text DEFAULT 'waiting' NOT NULL,
	`updated_at` integer NOT NULL
);
