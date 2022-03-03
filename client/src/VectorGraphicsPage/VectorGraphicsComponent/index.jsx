import React from "react";
import { motion } from "framer-motion";

export default function VectorGraphics() {
  return (
    <div className="relative w-screen h-80 -z-50">
      {/** Right Side Vector Graphic */}
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: 100,
          opacity: -5,
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="absolute right-0 w-20 "
      >
        <svg
          id="Group_51"
          data-name="Group 51"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 350"
        >
          <g id="Group_1" data-name="Group 1">
            <g
              id="Rectangle_1"
              data-name="Rectangle 1"
              fill="#86c232"
              stroke="#707070"
              stroke-width="1"
            >
              <rect width="281" height="277" stroke="none" />
              <rect x="0.5" y="0.5" width="280" height="276" fill="none" />
            </g>
            <circle
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="175"
              cy="175"
              r="175"
              fill="#86c232"
            />
            <g
              id="Path_6"
              data-name="Path 6"
              transform="translate(29 29)"
              fill="#222629"
            >
              <path
                d="M 146 291.5 C 136.127685546875 291.5 126.2617111206055 290.5054321289062 116.676139831543 288.5439758300781 C 107.3344268798828 286.6323547363281 98.14564514160156 283.7799987792969 89.36499786376953 280.0661010742188 C 80.74360656738281 276.4195861816406 72.42828369140625 271.9061279296875 64.64992523193359 266.6511840820312 C 56.94532012939453 261.4460754394531 49.70024871826172 255.4683227539062 43.11596298217773 248.884033203125 C 36.53167724609375 242.2997436523438 30.55392837524414 235.0546722412109 25.34882164001465 227.3500671386719 C 20.09385681152344 219.5717163085938 15.58042812347412 211.2563934326172 11.93389320373535 202.6349945068359 C 8.220000267028809 193.8543548583984 5.367642879486084 184.6655731201172 3.456035614013672 175.3238525390625 C 1.494571447372437 165.73828125 0.5 155.872314453125 0.5 146 C 0.5 136.127685546875 1.494571447372437 126.2617111206055 3.456035614013672 116.676139831543 C 5.367642879486084 107.3344268798828 8.220000267028809 98.14564514160156 11.93389320373535 89.36499786376953 C 15.58042812347412 80.74360656738281 20.09385681152344 72.42828369140625 25.34882164001465 64.64992523193359 C 30.55392837524414 56.94532012939453 36.53167724609375 49.70024871826172 43.11596298217773 43.11596298217773 C 49.70024871826172 36.53167724609375 56.94532012939453 30.55392837524414 64.64992523193359 25.34882164001465 C 72.42828369140625 20.09385681152344 80.74360656738281 15.58042812347412 89.36499786376953 11.93389320373535 C 98.14564514160156 8.220000267028809 107.3344268798828 5.367642879486084 116.676139831543 3.456035614013672 C 126.2617111206055 1.494571447372437 136.127685546875 0.5 146 0.5 C 155.872314453125 0.5 165.73828125 1.494571447372437 175.3238525390625 3.456035614013672 C 184.6655731201172 5.367642879486084 193.8543548583984 8.220000267028809 202.6349945068359 11.93389320373535 C 211.2563934326172 15.58042812347412 219.5717163085938 20.09385681152344 227.3500671386719 25.34882164001465 C 235.0546722412109 30.55392837524414 242.2997436523438 36.53167724609375 248.884033203125 43.11596298217773 C 255.4683227539062 49.70024871826172 261.4460754394531 56.94532012939453 266.6511840820312 64.64992523193359 C 271.9061279296875 72.42828369140625 276.4195861816406 80.74360656738281 280.0661010742188 89.36499786376953 C 283.7799987792969 98.14564514160156 286.6323547363281 107.3344268798828 288.5439758300781 116.676139831543 C 290.5054321289062 126.2617111206055 291.5 136.127685546875 291.5 146 C 291.5 155.872314453125 290.5054321289062 165.73828125 288.5439758300781 175.3238525390625 C 286.6323547363281 184.6655731201172 283.7799987792969 193.8543548583984 280.0661010742188 202.6349945068359 C 276.4195861816406 211.2563934326172 271.9061279296875 219.5717163085938 266.6511840820312 227.3500671386719 C 261.4460754394531 235.0546722412109 255.4683227539062 242.2997436523438 248.884033203125 248.884033203125 C 242.2997436523438 255.4683227539062 235.0546722412109 261.4460754394531 227.3500671386719 266.6511840820312 C 219.5717163085938 271.9061279296875 211.2563934326172 276.4195861816406 202.6349945068359 280.0661010742188 C 193.8543548583984 283.7799987792969 184.6655731201172 286.6323547363281 175.3238525390625 288.5439758300781 C 165.73828125 290.5054321289062 155.872314453125 291.5 146 291.5 Z"
                stroke="none"
              />
              <path
                d="M 146 1 C 136.1612701416016 1 126.3290405273438 1.99114990234375 116.7763824462891 3.945892333984375 C 107.4669952392578 5.85089111328125 98.31004333496094 8.693359375 89.55976867675781 12.3944091796875 C 80.96810913085938 16.02835083007812 72.68142700195312 20.5262451171875 64.9298095703125 25.76312255859375 C 57.25161743164062 30.95040893554688 50.03131103515625 36.90773010253906 43.46949768066406 43.46949768066406 C 36.90773010253906 50.03131103515625 30.95040893554688 57.25161743164062 25.76312255859375 64.9298095703125 C 20.5262451171875 72.68142700195312 16.02835083007812 80.96810913085938 12.3944091796875 89.55976867675781 C 8.693359375 98.31004333496094 5.85089111328125 107.4669952392578 3.945892333984375 116.7763824462891 C 1.99114990234375 126.3290405273438 1 136.1612701416016 1 146 C 1 155.8387298583984 1.99114990234375 165.6709594726562 3.945892333984375 175.2236175537109 C 5.85089111328125 184.5329895019531 8.693359375 193.6899719238281 12.3944091796875 202.4402313232422 C 16.02835083007812 211.0318908691406 20.5262451171875 219.3185729980469 25.76312255859375 227.0701904296875 C 30.95040893554688 234.7483825683594 36.90773010253906 241.9686889648438 43.46949768066406 248.5305023193359 C 50.03131103515625 255.0922698974609 57.25161743164062 261.0495910644531 64.9298095703125 266.2368774414062 C 72.68142700195312 271.4737548828125 80.96810913085938 275.9716491699219 89.55976867675781 279.6055908203125 C 98.31004333496094 283.306640625 107.4669952392578 286.1491088867188 116.7763824462891 288.0541076660156 C 126.3290405273438 290.0088500976562 136.1612701416016 291 146 291 C 155.8387298583984 291 165.6709594726562 290.0088500976562 175.2236175537109 288.0541076660156 C 184.5329895019531 286.1491088867188 193.6899719238281 283.306640625 202.4402313232422 279.6055908203125 C 211.0318908691406 275.9716491699219 219.3185729980469 271.4737548828125 227.0701904296875 266.2368774414062 C 234.7483825683594 261.0495910644531 241.9686889648438 255.0922698974609 248.5305023193359 248.5305023193359 C 255.0922698974609 241.9686889648438 261.0495910644531 234.7483825683594 266.2368774414062 227.0701904296875 C 271.4737548828125 219.3185729980469 275.9716491699219 211.0318908691406 279.6055908203125 202.4402313232422 C 283.306640625 193.6899719238281 286.1491088867188 184.5329895019531 288.0541076660156 175.2236175537109 C 290.0088500976562 165.6709594726562 291 155.8387298583984 291 146 C 291 136.1612701416016 290.0088500976562 126.3290405273438 288.0541076660156 116.7763824462891 C 286.1491088867188 107.4669952392578 283.306640625 98.31004333496094 279.6055908203125 89.55976867675781 C 275.9716491699219 80.96810913085938 271.4737548828125 72.68142700195312 266.2368774414062 64.9298095703125 C 261.0495910644531 57.25161743164062 255.0922698974609 50.03131103515625 248.5305023193359 43.46949768066406 C 241.9686889648438 36.90773010253906 234.7483825683594 30.95040893554688 227.0701904296875 25.76312255859375 C 219.3185729980469 20.5262451171875 211.0318908691406 16.02835083007812 202.4402313232422 12.3944091796875 C 193.6899719238281 8.693359375 184.5329895019531 5.85089111328125 175.2236175537109 3.945892333984375 C 165.6709594726562 1.99114990234375 155.8387298583984 1 146 1 M 146 0 C 226.6335754394531 0 292 65.36642456054688 292 146 C 292 226.6335754394531 226.6335754394531 292 146 292 C 65.36642456054688 292 0 226.6335754394531 0 146 C 0 65.36642456054688 65.36642456054688 0 146 0 Z"
                stroke="none"
                fill="#707070"
              />
            </g>
          </g>
        </svg>
      </motion.div>
      {/** Left Side Vector Graphic */}
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: -100,
          opacity: -5,
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="absolute w-20 -z-50 left-0 bottom-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350">
          <g
            id="Group_48"
            data-name="Group 48"
            transform="translate(-299 -986)"
          >
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-1486 468)"
            >
              <g
                id="Rectangle_1"
                data-name="Rectangle 1"
                transform="translate(1854 591)"
                fill="#86c232"
                stroke="#707070"
                stroke-width="1"
              >
                <rect width="281" height="277" stroke="none" />
                <rect x="0.5" y="0.5" width="280" height="276" fill="none" />
              </g>
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="175"
                cy="175"
                r="175"
                transform="translate(1785 518)"
                fill="#86c232"
              />
              <g
                id="Ellipse_2"
                data-name="Ellipse 2"
                transform="translate(1814 547)"
                fill="#222629"
                stroke="#707070"
                stroke-width="1"
              >
                <circle cx="146" cy="146" r="146" stroke="none" />
                <circle cx="146" cy="146" r="145.5" fill="none" />
              </g>
            </g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
