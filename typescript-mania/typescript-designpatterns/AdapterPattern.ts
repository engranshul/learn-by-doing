interface Iphone {
    useTypeCChargingPort() : void;
}

interface Android {
   useUsbChargingPort() : void;
}


class Iphone7 implements Iphone {
    useTypeCChargingPort() {
        console.log("using type c port");
    }

}

class GooglePixel implements Android {
    useUsbChargingPort() {
        console.log("using usb port");
    }
    
}

class TypeCPortToUsbAdapter implements Android {
    phone : Iphone;
    constructor(phone : Iphone) {
        this.phone=phone;
    }
    useUsbChargingPort() {
        // some logic...
        this.phone.useTypeCChargingPort();
    }

}