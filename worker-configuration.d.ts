/* eslint-disable */
// Generated by Wrangler by running `wrangler types --include-runtime false` (hash: 64be992411108c1d7e5c0be242de63d1)
declare namespace Cloudflare {
	interface Env {
		OPENAI_API_KEY: string;
		REALTIME_DURABLE_OBJECT: DurableObjectNamespace<import("./src/worker").RealtimeDurableObject>;
		CHAT_DURABLE_OBJECT: DurableObjectNamespace<import("./src/worker").ChatDurableObject>;
		AI: Ai;
	}
}
interface Env extends Cloudflare.Env {}
