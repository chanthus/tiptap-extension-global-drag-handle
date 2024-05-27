import { Extension } from '@tiptap/core';
import { Plugin } from '@tiptap/pm/state';
export interface GlobalDragHandleOptions {
    /**
     * The width of the drag handle
     */
    dragHandleWidth: number;
    /**
     * The treshold for scrolling
     */
    scrollTreshold: number;
    dragHandleSelector?: string;
}
export declare function DragHandlePlugin(options: GlobalDragHandleOptions & {
    pluginKey: string;
}): Plugin<any>;
declare const GlobalDragHandle: Extension<any, any>;
export default GlobalDragHandle;
