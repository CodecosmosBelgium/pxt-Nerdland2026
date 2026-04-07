//% color=140 weight=100 block="CodeFever"
namespace CodeFever {
    export enum Richting {
        //% block="vooruit"
        Vooruit,
        //% block="achteruit"
        Achteruit,
        //% block="links"
        Links,
        //% block=rechts
        Rechts
    }

    function blockMetSpoor(powered: boolean) {
        let list = [REDSTONE_BLOCK, POWERED_RAIL, AIR]
        if (!(powered)) {
            list[0] = RED_CONCRETE
            list[1] = RAIL
        }
        for (let index = 0; index <= list.length - 1; index++) {
            builder.place(list[index])
            builder.move(UP, 1)
        }
        builder.shift(1, -3, 0)
    }

    //% block="Beweeg Agent"
    //% richting.defl=vooruit
    export function moveAgent(richting: Richting) {
        switch(richting){
            case Richting.Vooruit:
                agent.move(FORWARD, 1);
                break;
            case Richting.Achteruit:
                agent.move(BACK, 1);
                break;
            case Richting.Links:
                agent.move(LEFT, 1);
                break;
            case Richting.Rechts:
                agent.move(RIGHT, 1);
                break;
        }
        
    }
}