import React from "react";

export const NoItem = () => {
  return (
    <div class=" flex h-screen bg-white">
      <div class="m-auto flex-col justify-center items-center">
        <div className="flex justify-center">
          {/* icon svg */}
          <svg width="122" height="122" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M55.9167 96.5833C78.3763 96.5833 96.5833 78.3763 96.5833 55.9167C96.5833 33.4571 78.3763 15.25 55.9167 15.25C33.4571 15.25 15.25 33.4571 15.25 55.9167C15.25 78.3763 33.4571 96.5833 55.9167 96.5833Z"
              stroke="#C7C7C7"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M106.75 106.75L84.6375 84.6375" stroke="#C7C7C7" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <h3 className="w-52  font-semibold text-3xl leading-8 text-center my-4">item not found</h3>
        <p className="w-56  font-normal text-base leading-5 text-center">Try searching the item with a different keyword </p>
      </div>
    </div>
  );
};
