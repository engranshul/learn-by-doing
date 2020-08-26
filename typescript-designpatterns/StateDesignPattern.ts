interface State {
    order: Order;

    cancelOrder(): void;
    verifyPayment(): void;
    shipOrder(): void;
}

class Order {
    private currState: State;

    public cancelOrderState: State;
    public paymentPendingState: State;
    public orderShippedState: State;
    public orderBeingPreparedState: State;

    constructor() {
        /*  benefit of this is that we have initialized states only once in 
        constructor..now no need to do new on states anywhere else
        */
        this.cancelOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);

        this.setState(this.paymentPendingState);
    }

    setState(state: State) {
        this.currState = state;
    }
    getState() {
        return this.currState;
    }

}

class PaymentPendingState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder() {
        console.log("cancelling your unpaid order")
        // see how this cancelOrderState is already initialized
        this.order.setState(this.order.cancelOrderState);
    }
    verifyPayment() {
        console.log("payment verified..shipping soon")
        this.order.setState(this.order.orderBeingPreparedState);
    }
    shipOrder() {
        console.log("can not ship the order when payment is pending");
    }

}

class CancelledOrderState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder() {
        console.log("alraedy cancelled")
    }
    verifyPayment() {
        console.log("can not verify payment of cancelled order")
    }
    shipOrder() {
        console.log("can not ship cancelled order")
    }

}

class OrderShippedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder() {
        console.log("cant cancel");
    }
    verifyPayment() {
        console.log("already verified")
    }
    shipOrder() {
        console.log("alraedy shipped")
    }

}
class OrderBeingPreparedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder() {
        console.log("cancelling order")
        this.order.setState(this.order.cancelOrderState);
    }
    verifyPayment() {
        console.log("already verified payment")
    }
    shipOrder() {
        console.log("shipping ur order now")
        this.order.setState(this.order.orderShippedState);
    }

}

let order = new Order();
console.log("order state :" + (<any>order.getState()).constructor.name)
order.getState().shipOrder();
console.log("order state :" + (<any>order.getState()).constructor.name)
order.getState().verifyPayment();
order.getState().shipOrder();

/*
Both order and state are tracking each other
state is tracking order so it has a costructor that takes order
Order has private state and accessed using getter and setter
concept of how we made separate variables for all the states and -
initialized all states at once
*/