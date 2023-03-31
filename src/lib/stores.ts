import {writable} from "svelte/store";

export const innerWidth = writable(0);
export const posts = writable([]);
export const pages = writable(0);
export const currentPage = writable(1);
export const isOverlay = writable(false);
