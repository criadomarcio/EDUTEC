document.addEventListener('DOMContentLoaded', () => {
  const tracker = document.querySelector('.cursor-tracker');
  const trackerSize = tracker.offsetWidth;
  let trackerX = 0;
  let trackerY = 0;
  let mouseX = 0;
  let mouseY = 0;
  const speed = 0.05;
  let isVisible = false;

  document.addEventListener('mousemove', e => {
    if (!isVisible) {
      isVisible = true;
      tracker.style.opacity = 1;
      updatePosition();
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const updatePosition = () => {
    const distanceX = mouseX - (trackerX + trackerSize / 2);
    const distanceY = mouseY - (trackerY + trackerSize / 2);

    trackerX += distanceX * speed;
    trackerY += distanceY * speed;

    tracker.style.transform = `translate(${trackerX}px, ${trackerY}px)`;
    requestAnimationFrame(updatePosition);
  };
});

const updatePosition = () => {
  const distanceX = mouseX - (trackerX + trackerSize / 2)
  const distanceY = mouseY - (trackerY + trackerSize / 2)

  trackerX += distanceX * speed
  trackerY += distanceY * speed

  tracker.style.transform = `translate(${trackerX}px, ${trackerY}px)`
  requestAnimationFrame(updatePosition)
}

const openTerraDialogButton = document.getElementById('openTerraDialog');
const terraDialog = document.getElementById('terraDialog');

const openLuaDialogButton = document.getElementById('openLuaDialog');
const luaDialog = document.getElementById('luaDialog');

openTerraDialogButton.addEventListener('click', () => {
  terraDialog.showModal();
});

openLuaDialogButton.addEventListener('click', () => {
  luaDialog.showModal();
});

const closeTerraDialogButton = terraDialog.querySelector('.fechar');
const closeLuaDialogButton = luaDialog.querySelector('.fechar');

closeTerraDialogButton.addEventListener('click', () => {
  terraDialog.close();
});

closeLuaDialogButton.addEventListener('click', () => {
  luaDialog.close();
});
const openMarteDialogButton = document.getElementById('openMarteDialog');
const marteDialog = document.getElementById('marteDialog');

openMarteDialogButton.addEventListener('click', () => {
  marteDialog.showModal();
});

const closeMarteDialogButton = marteDialog.querySelector('.fechar');

closeMarteDialogButton.addEventListener('click', () => {
  marteDialog.close();
});
const openMercurioDialogButton = document.getElementById('openMercurioDialog');
const mercurioDialog = document.getElementById('mercurioDialog');

openMercurioDialogButton.addEventListener('click', () => {
  mercurioDialog.showModal();
});

const closeMercurioDialogButton = mercurioDialog.querySelector('.fechar');

closeMercurioDialogButton.addEventListener('click', () => {
  mercurioDialog.close();
});
const openSolDialogButton = document.getElementById('openSolDialog');
const solDialog = document.getElementById('solDialog');

openSolDialogButton.addEventListener('click', () => {
  solDialog.showModal();
});

const closeSolDialogButton = solDialog.querySelector('.fechar');

closeSolDialogButton.addEventListener('click', () => {
  solDialog.close();
});
const openVenusDialogButton = document.getElementById('openVenusDialog');
const venusDialog = document.getElementById('venusDialog');

openVenusDialogButton.addEventListener('click', () => {
  venusDialog.showModal();
});

const closeVenusDialogButton = venusDialog.querySelector('.fechar');

closeVenusDialogButton.addEventListener('click', () => {
  venusDialog.close();
});
const openJupiterDialogButton = document.getElementById('openJupiterDialog');
const jupiterDialog = document.getElementById('jupiterDialog');

openJupiterDialogButton.addEventListener('click', () => {
  jupiterDialog.showModal();
});

const closeJupiterDialogButton = jupiterDialog.querySelector('.fechar');

closeJupiterDialogButton.addEventListener('click', () => {
  jupiterDialog.close();
});
const openSaturnoDialogButton = document.getElementById('openSaturnoDialog');
const saturnoDialog = document.getElementById('saturnoDialog');

openSaturnoDialogButton.addEventListener('click', () => {
  saturnoDialog.showModal();
});

const closeSaturnoDialogButton = saturnoDialog.querySelector('.fechar');

closeSaturnoDialogButton.addEventListener('click', () => {
  saturnoDialog.close();
});
const openUranioDialogButton = document.getElementById('openUranioDialog');
const uranioDialog = document.getElementById('uranioDialog');

openUranioDialogButton.addEventListener('click', () => {
  uranioDialog.showModal();
});

const closeUranioDialogButton = uranioDialog.querySelector('.fechar');

closeUranioDialogButton.addEventListener('click', () => {
  uranioDialog.close();
});

const openNetunoDialogButton = document.getElementById('openNetunoDialog');
const netunoDialog = document.getElementById('netunoDialog');

openNetunoDialogButton.addEventListener('click', () => {
  netunoDialog.showModal();
});

const closeNetunoDialogButton = netunoDialog.querySelector('.fechar');

closeNetunoDialogButton.addEventListener('click', () => {
  netunoDialog.close();
});
