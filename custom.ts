//% color=140 weight=100 block="CodeFever"
namespace CodeFever {
    //% block="Plaats Koper"
    export function placeCopper(){
        let position = agent.getPosition().add(pos(0, -1, 0));
        if(blocks.testForBlock(LIGHT_GRAY_CONCRETE, position)) player.say("Kan geen koper plaatsen op deze plaats");
        else {
            blocks.place(599, position)
        }
    }

    //% block="Beweeg Vooruit"
    export function moveAgentForward() {
        agent.move(FORWARD, 1);
    }

    //% block="Beweeg Achteruit"
    export function moveAgentBack() {
        agent.move(BACK, 1);
    }

    //% block="Beweeg Links"
    export function moveAgentLeft() {
        agent.move(LEFT, 1);
    }

    //% block="Beweeg Rechts"
    export function moveAgentRight() {
        agent.move(RIGHT, 1);
    }
}