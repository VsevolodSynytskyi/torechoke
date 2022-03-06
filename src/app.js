"use strict";
// Constatnts
const modalWrapper = document.querySelector(".scene--main__content-wrapper");
const characterPoseElements = document.querySelectorAll(".mascot--pose");
const characterPoses = [...characterPoseElements];
const modalLoadingElement = document.querySelector(".modal__loading");
const modalMessageElement = document.querySelector(".modal__message");
const modalApproveElement = document.querySelector(".modal__approve");
const changePoseButton = modalMessageElement === null || modalMessageElement === void 0 ? void 0 : modalMessageElement.querySelector(".modal__button");
const modalTextElements = [
    modalApproveElement,
    modalLoadingElement,
    modalMessageElement,
];
const gameDelaySeconds = 1.5;
let poseIndex = 0;
// Utilities
const setModalsToInvisible = () => {
    modalTextElements.forEach((element) => {
        element === null || element === void 0 ? void 0 : element.classList.add("invisible");
    });
};
const setPosesToInvisible = () => {
    [...characterPoses].forEach((element) => {
        element === null || element === void 0 ? void 0 : element.classList.add("invisible");
    });
};
const nextGameState = (callback) => { };
// Game states
const approve = () => {
    setModalsToInvisible();
    modalApproveElement === null || modalApproveElement === void 0 ? void 0 : modalApproveElement.classList.remove("invisible");
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
    modalMessageElement === null || modalMessageElement === void 0 ? void 0 : modalMessageElement.classList.remove("invisible");
};
changePoseButton === null || changePoseButton === void 0 ? void 0 : changePoseButton.addEventListener("click", approve);
const loading = () => {
    setModalsToInvisible();
    modalLoadingElement === null || modalLoadingElement === void 0 ? void 0 : modalLoadingElement.classList.remove("invisible");
    setTimeout(() => {
        getTired();
    }, gameDelaySeconds * 1000);
};
// App body
modalWrapper.addEventListener("animationend", loading);
