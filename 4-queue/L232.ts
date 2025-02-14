class MyQueue {
    // 只能用push、pop操作
    stack: number[];
    stack_help: number[];
    constructor() {
        this.stack = [];
        this.stack_help = [];
    }

    push(x: number): void {
        if(this.stack.length === 0){
            this.stack.push(x);
        }else{
            // 先出栈
            while(this.stack.length > 0){
                this.stack_help.push(this.stack.pop());
            }
            // 当前元素放置栈底
            this.stack.push(x);
            // 将辅助栈的元素放回栈中
            while(this.stack_help.length > 0){
                this.stack.push(this.stack_help.pop());
            }
        }
    }

    pop(): number {
        return this.stack.pop();
    }

    peek(): number {
        return this.stack[this.stack.length - 1];
    }

    empty(): boolean {
        return this.stack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */