CREATE INDEX `idx_game_rooms_visibility_status_updated` ON `game_rooms` (`visibility`,`status`,`updated_at`);
--> statement-breakpoint
PRAGMA optimize;
