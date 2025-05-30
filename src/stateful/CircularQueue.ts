export class CircularQueue<T> {
    private maxSize: number;
    private start!: number;
    private end!: number;
    private map!: Map<number, T>;

    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.clear();
    }

    public get size(): number {
        return this.end - this.start;
    }

    public clear(): void {
        this.start = 0;
        this.end = 0;
        this.map = new Map();
    }

    public enqueue(item: T): void {
        this.map.set(this.end++, item);

        if (this.size > this.maxSize) {
            this.dequeue();
        }
    }

    private dequeue(): void {
        this.map.delete(this.start++);
    }

    /**
     * @param idx represents the index counting from the tail of the queue.  idx of
     * `0` is the tail itself
     */
    public fromTail(idx: number): T | undefined {
        return this.map.get(this.end - 1 - idx);
    }

    public tail(): T | undefined {
        return this.map.get(this.end - 1);
    }

    /**
     * Reverse iterates the queue (latest to earliest added)
     * */
    public forEach(cb: (item: T, i: number) => unknown): void {
        let i = 0;
        for (let j = this.end - 1; j >= this.start; --j) {
            const item = this.map.get(j);
            if (item) cb(item, i++);
        }
    }
}
