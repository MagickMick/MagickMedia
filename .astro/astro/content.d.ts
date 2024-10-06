declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"post": {
"beveilig-je-wordpress-website-tegen-hackers.md": {
	id: "beveilig-je-wordpress-website-tegen-hackers.md";
  slug: "beveilig-je-wordpress-website-tegen-hackers";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"cdn-met-cloudflair-binnen-cpanel.md": {
	id: "cdn-met-cloudflair-binnen-cpanel.md";
  slug: "cdn-met-cloudflair-binnen-cpanel";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"contactformulier-met-nodejs-in-cpanel.md": {
	id: "contactformulier-met-nodejs-in-cpanel.md";
  slug: "contactformulier-met-nodejs-in-cpanel";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"coversies-maximaliseren-met-google-tag-manager.md": {
	id: "coversies-maximaliseren-met-google-tag-manager.md";
  slug: "coversies-maximaliseren-met-google-tag-manager";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"eenvoudige-seo-tips-en-tricks.md": {
	id: "eenvoudige-seo-tips-en-tricks.md";
  slug: "eenvoudige-seo-tips-en-tricks";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"elementor-als-wordpress-pagebuilder.md": {
	id: "elementor-als-wordpress-pagebuilder.md";
  slug: "elementor-als-wordpress-pagebuilder";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"email-verhuizen-met-outlook.md": {
	id: "email-verhuizen-met-outlook.md";
  slug: "email-verhuizen-met-outlook";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"gastbloggen-linkbuilding-seo-strategie.md": {
	id: "gastbloggen-linkbuilding-seo-strategie.md";
  slug: "gastbloggen-linkbuilding-seo-strategie";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"gebruik-negatieve-zoekwoorden-google-ads-strategie.md": {
	id: "gebruik-negatieve-zoekwoorden-google-ads-strategie.md";
  slug: "gebruik-negatieve-zoekwoorden-google-ads-strategie";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"gratis-seo-handleiding-voor-beginners.md": {
	id: "gratis-seo-handleiding-voor-beginners.md";
  slug: "gratis-seo-handleiding-voor-beginners";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"hoe-a-b-testen-google-ads.md": {
	id: "hoe-a-b-testen-google-ads.md";
  slug: "hoe-a-b-testen-google-ads";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"hoe-een-cdn-website-sneller-maakt.md": {
	id: "hoe-een-cdn-website-sneller-maakt.md";
  slug: "hoe-een-cdn-website-sneller-maakt";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"invloed-webhosting-seo-en-vindbaarheid.md": {
	id: "invloed-webhosting-seo-en-vindbaarheid.md";
  slug: "invloed-webhosting-seo-en-vindbaarheid";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"klanten-bereiken-met-onbekende-dienst-product.md": {
	id: "klanten-bereiken-met-onbekende-dienst-product.md";
  slug: "klanten-bereiken-met-onbekende-dienst-product";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"meertalige-website-wordpress-plugins.md": {
	id: "meertalige-website-wordpress-plugins.md";
  slug: "meertalige-website-wordpress-plugins";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"optimaliseer-google-ads-campagne-hoger-conversieratio.md": {
	id: "optimaliseer-google-ads-campagne-hoger-conversieratio.md";
  slug: "optimaliseer-google-ads-campagne-hoger-conversieratio";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"opvallen-zoekresultaten-rich-snippets.md": {
	id: "opvallen-zoekresultaten-rich-snippets.md";
  slug: "opvallen-zoekresultaten-rich-snippets";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"rank-math-of-yoast-seo-plugin.md": {
	id: "rank-math-of-yoast-seo-plugin.md";
  slug: "rank-math-of-yoast-seo-plugin";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"technische-seo-checklist.md": {
	id: "technische-seo-checklist.md";
  slug: "technische-seo-checklist";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"wat-is-caching.md": {
	id: "wat-is-caching.md";
  slug: "wat-is-caching";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"wat-is-crawlen.md": {
	id: "wat-is-crawlen.md";
  slug: "wat-is-crawlen";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"wordpress-website-verhuizen-naar-andere-hosting.md": {
	id: "wordpress-website-verhuizen-naar-andere-hosting.md";
  slug: "wordpress-website-verhuizen-naar-andere-hosting";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"zelf-wordpress-website-maken.md": {
	id: "zelf-wordpress-website-maken.md";
  slug: "zelf-wordpress-website-maken";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"zoekwoorden-analyseren-en-hogerop-in-google.md": {
	id: "zoekwoorden-analyseren-en-hogerop-in-google.md";
  slug: "zoekwoorden-analyseren-en-hogerop-in-google";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
