"use client";
import {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { Box } from "../ui/box";

type TypingTextProps = {
  text: string;
  speed?: number;
  onDone?: () => void;
  children: (props: {
    text: string;
    cursor: React.ReactNode;
  }) => React.ReactNode;
};

export type TypingTextHandle = {
  showCursor: () => void;
  hideCursor: () => void;
};

const TypingText = forwardRef<TypingTextHandle, TypingTextProps>(
  ({ text, speed = 100, onDone, children }, ref) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      showCursor: () => setCursorVisible(true),
      hideCursor: () => setCursorVisible(false),
    }));

    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        onDone?.();
        // setCursorVisible(true);
        // setTimeout(() => setCursorVisible(true), 500);
      }
    }, [index, text, speed, onDone]);

    return (
      <Box>
        {children({
          text: displayedText,
          // TODO: cursor 줄바꿈시 처리방안 고민
          cursor: cursorVisible ? (
            <span
              aria-hidden="true"
              className="ml-1 flex h-full w-px scale-75 animate-blink items-center justify-center bg-background-foreground text-transparent sm:hidden xs:hidden">
              |
            </span>
          ) : null,
        })}
      </Box>
    );
  }
);

export default TypingText;
