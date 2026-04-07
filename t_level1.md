### @hideIteration true
### @flyoutOnly true

# Nerdland
```blocks
player.onChat("level1", function () {
    builder.teleportTo(pos(0, -1, 0))
    Codefever.moveAgentForward();
    Codefever.moveAgentBack();
    Codefever.moveAgentLeft();
    Codefever.moveAgentRight();
    Codefever.placeCopper();
    for (let index = 0; index < 4; index++) {
    }
})
```

```template
player.onChat("level1", function () {
	
})
```

## Repareer Chips

Gebruik de agent om de chips te repareren voor de drones.
