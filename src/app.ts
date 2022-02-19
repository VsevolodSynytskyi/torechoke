// Constatnts

const modalWrapper = document.querySelector(
  ".scene--main__content-wrapper"
)! as HTMLDivElement;
const characterPoseElements = document.querySelectorAll(
  ".mascot--pose"
)! as NodeListOf<HTMLImageElement>;
const characterPoses = [...characterPoseElements];
const modalLoadingElement = document.querySelector(".modal__loading");
const modalMessageElement = document.querySelector(".modal__message");
const modalApproveElement = document.querySelector(".modal__approve");
const changePoseButton = modalMessageElement?.querySelector(
  ".modal__button"
) as HTMLButtonElement;

const modalTextElements = [
  modalApproveElement,
  modalLoadingElement,
  modalMessageElement,
];

const gameDelaySeconds = 4;
let poseIndex = 0;

// Utilities

const setModalsToInvisible = () => {
  modalTextElements.forEach((element) => {
    element?.classList.add("invisible");
  });
};

const setPosesToInvisible = () => {
  [...characterPoses].forEach((element) => {
    element?.classList.add("invisible");
  });
};

const nextGameState = (callback: () => void) => {};

// Game states

const approve = () => {
  setModalsToInvisible();
  modalApproveElement?.classList.remove("invisible");
  setPosesToInvisible();
  poseIndex += 1;
  if (poseIndex >= characterPoses.length) {
    poseIndex = 0;
  }
  characterPoses[poseIndex].classList.remove("invisible");
  setTimeout(() => {
    loading();
  }, gameDelaySeconds * 1000);
};

const getTired = () => {
  setModalsToInvisible();
  modalMessageElement?.classList.remove("invisible");
};

changePoseButton?.addEventListener("click", approve);

const loading = () => {
  setModalsToInvisible();
  modalLoadingElement?.classList.remove("invisible");
  setTimeout(() => {
    getTired();
  }, gameDelaySeconds * 1000);
};

// App body

modalWrapper.addEventListener("animationend", loading);
