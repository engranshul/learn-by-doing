class Internet {
    on() {
        console.log("on internet");
    }
    off() {
        console.log("off internet");
    }
}

class PopcornMaker {
    clean() {
        console.log("clean popcorn maker")
    }
    start() {
        console.log("started popcorn maker");
    }
    stop() {
        console.log("stopped popcorn maker");
    }
}

class TV {
    start() {
        console.log("have started television");
    }
    connectWifi() {
        console.log("wifi connected");
    }
    stop() {
        console.log("have stopped television");
    }
}

class EntertainmentFacade {

     net : Internet;
     popcorn : PopcornMaker;
     television : TV;


     constructor(net:Internet,popcorn: PopcornMaker,television:TV) {
         this.net=net;
         this.popcorn=popcorn;
         this.television=television;
     }

     watchMovie() {
         console.log("*****started watching movie")
         this.net.on();
         this.popcorn.clean();
         this.popcorn.start();
         this.television.start();
         this.television.connectWifi();
     }

     endMovie() {
         console.log("*****ending movie");
         this.television.stop();
         this.popcorn.stop();
     }
}

new EntertainmentFacade(new Internet(),new PopcornMaker(),new TV()).watchMovie();
new EntertainmentFacade(new Internet(),new PopcornMaker(),new TV()).endMovie();


/* 
In this i have learned that instead of calling methods in different classes..
how we can make a facade and get things done
*/