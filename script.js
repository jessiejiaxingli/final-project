AOS.init();

VANTA.FOG({
  el: '#my-background',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xf0f7fa,
  midtoneColor: 0x8dc1d7,
  lowlightColor: 0x3d7f94,
  baseColor: 0x60a8be
});

VANTA.FOG({
  el: '#background2',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xf0f7fa,
  midtoneColor: 0x8dc1d7,
  lowlightColor: 0x3d7f94,
  baseColor: 0x60a8be
});

VANTA.BIRDS({
  el: "#birds",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  // backgroundColor: 0xbae6f2,
  color1: 0xB8818D,
  color2: 0x8DC1D7,
  birdSize: 1.60,
  backgroundAlpha: 0
})

VANTA.CELLS({
  el: "#water",
  mouseControls: true,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 4.00,
  color1: 0x107683,
  color2: 0x8DC1D7,
  speed: 2
});

VANTA.CELLS({
  el: "#deepwater",
  mouseControls: true,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 4.00,
  color1: 0x184E77,
  color2: 0x1A759F,
  speed: 2
});

VANTA.FOG({
  el: '#fly',
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xf0f7fa,
  midtoneColor: 0x8dc1d7,
  lowlightColor: 0x3d7f94,
  baseColor: 0x60a8be
});