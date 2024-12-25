import Image from "next/image";
import React, { useActionState, useState } from "react";
import { FcCamera } from "react-icons/fc";

function Avatar({ type, image, setImage }) {
  const [hover, setHover] = useState(false);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuCordinates, setContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  });

  const showContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenuVisible({ x: e.pageX, y: e.pageY });
    setContextMenuCordinates(true);
  };


  return (
    <>
      <div className="flex items-center justify-center">
        {type === "sm" && (
          <div className="relative h-10 w-10 cursor-pointer">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}

        {type === "lg" && (
          <div className="relative h-14 w-14 cursor-pointer">
            <Image src={image} alt="avatar" className="rounded-full" />
          </div>
        )}

        {type === "xl" && (
          <div
            className="relative z-0 cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onmouseleave={() => setHover(false)}
          >
            <div
              className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 ${
                hover ? "visible" : "hidden"
              }`}
              onClick={(e) => showContextMenu(e)}
              id="context-opener"
            >
              <FcCamera
                className="text-2xl"
                id="context-opener"
                onClick={(e) => showContextMenu(e)}
              />
              <Span onClick={(e) => showContextMenu(e)} id="context-opener">
                Change <br /> Profile <br /> photo
              </Span>
            </div>
            <div className="flex items-center justify-center h-60 w-60">
              <Image src={image} alt="avatar" className="rounded-full" fill />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Avatar;
