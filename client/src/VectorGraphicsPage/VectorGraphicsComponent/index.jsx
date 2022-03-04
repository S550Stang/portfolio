import React from "react";
import { motion } from "framer-motion";

export default function VectorGraphics() {
  return (
    <div className="relative w-screen h-80 -z-50 mt-24">
      {/** Right Side Vector Graphic */}
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: "100vw",
          opacity: -5,
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          bounce: 0.3,
        }}
        className="absolute right-0 w-24 3xl:right-40 3xl:w-44 "
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351 350">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#25af9a" />
              <stop offset="1" stop-color="#2d4b9a" />
            </linearGradient>
          </defs>
          <g id="Group_57" data-name="Group 57" transform="translate(45)">
            <ellipse
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="175.5"
              cy="175"
              rx="175.5"
              ry="175"
              transform="translate(-45)"
              fill="url(#linear-gradient)"
            />
            <g
              id="Rectangle_1"
              data-name="Rectangle 1"
              transform="translate(-45)"
              stroke="rgba(34,38,41,0)"
              stroke-width="1"
              fill="url(#linear-gradient)"
            >
              <rect width="281" height="277" stroke="none" />
              <rect x="0.5" y="0.5" width="280" height="276" fill="none" />
            </g>
            <g
              id="Path_6"
              data-name="Path 6"
              transform="translate(-19 31)"
              fill="#04060f"
            >
              <path
                d="M150,300A150,150,0,1,1,300,150,150,150,0,0,1,150,300Z"
                stroke="none"
              />
              <path
                d="M 150 299 C 160.1101226806641 299 170.2135772705078 297.9815063476562 180.0297698974609 295.9728393554688 C 189.5959167480469 294.0153198242188 199.0055389404297 291.0943908691406 207.9971923828125 287.2912292480469 C 216.8258514404297 283.5570373535156 225.3411560058594 278.9350891113281 233.3066101074219 273.5537414550781 C 241.1966552734375 268.2233581542969 248.6161193847656 262.1016845703125 255.35888671875 255.35888671875 C 262.1016845703125 248.6161193847656 268.2233581542969 241.1966552734375 273.5537414550781 233.3066101074219 C 278.9350891113281 225.3411560058594 283.5570373535156 216.8258514404297 287.2912292480469 207.9971923828125 C 291.0943908691406 199.0055389404297 294.0153198242188 189.5959167480469 295.9728393554688 180.0297698974609 C 297.9815063476562 170.2135772705078 299 160.1101226806641 299 150 C 299 139.8898773193359 297.9815063476562 129.7864227294922 295.9728393554688 119.9702301025391 C 294.0153198242188 110.4040374755859 291.0943908691406 100.9944229125977 287.2912292480469 92.00276947021484 C 283.5570373535156 83.17411804199219 278.9350891113281 74.65880584716797 273.5537414550781 66.69338226318359 C 268.2233581542969 58.8033447265625 262.1016845703125 51.38388442993164 255.35888671875 44.64107513427734 C 248.6161193847656 37.89826965332031 241.1966552734375 31.77665328979492 233.3066101074219 26.44626998901367 C 225.3411560058594 21.06492233276367 216.8258514404297 16.44296073913574 207.9971923828125 12.70873069763184 C 199.0055389404297 8.905576705932617 189.5959167480469 5.984692096710205 180.0297698974609 4.027153968811035 C 170.2135772705078 2.018500089645386 160.1101226806641 1 150 1 C 139.8898773193359 1 129.7864227294922 2.018500089645386 119.9702301025391 4.027153968811035 C 110.4040756225586 5.984692096710205 100.9944610595703 8.905576705932617 92.0028076171875 12.70873069763184 C 83.17415618896484 16.44296073913574 74.65884399414062 21.06492233276367 66.69338226318359 26.44626998901367 C 58.8033447265625 31.77665328979492 51.38388442993164 37.89826965332031 44.64111709594727 44.64107513427734 C 37.89830780029297 51.38388442993164 31.77665328979492 58.8033447265625 26.44626998901367 66.69338226318359 C 21.06492233276367 74.65880584716797 16.44296073913574 83.17411804199219 12.70876884460449 92.00276947021484 C 8.90561580657959 100.9944229125977 5.984692096710205 110.4040374755859 4.027153968811035 119.9702301025391 C 2.018500089645386 129.7864227294922 1 139.8898773193359 1 150 C 1 160.1101226806641 2.018500089645386 170.2135772705078 4.027153968811035 180.0297698974609 C 5.984692096710205 189.5959167480469 8.90561580657959 199.0055389404297 12.70876884460449 207.9971923828125 C 16.44296073913574 216.8258514404297 21.06492233276367 225.3411560058594 26.44626998901367 233.3066101074219 C 31.77665328979492 241.1966552734375 37.89830780029297 248.6161193847656 44.64111709594727 255.35888671875 C 51.38388442993164 262.1016845703125 58.8033447265625 268.2233581542969 66.69338226318359 273.5537414550781 C 74.65884399414062 278.9350891113281 83.17415618896484 283.5570373535156 92.0028076171875 287.2912292480469 C 100.9944610595703 291.0943908691406 110.4040756225586 294.0153198242188 119.9702301025391 295.9728393554688 C 129.7864227294922 297.9815063476562 139.8898773193359 299 150 299 M 150 300 C 67.15731048583984 300 0 232.8426971435547 0 150 C 0 67.15727233886719 67.15731048583984 0 150 0 C 232.8426971435547 0 300 67.15727233886719 300 150 C 300 232.8426971435547 232.8426971435547 300 150 300 Z"
                stroke="none"
                fill="rgba(34,38,41,0)"
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
          x: "-100vw",
          opacity: -5,
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          bounce: 0.3,
        }}
        className="absolute w-24 -z-50 left-0 bottom-1 3xl:left-40 3xl:w-44"
      >
        <svg
          id="Group_58"
          data-name="Group 58"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 351 350"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              y1="1"
              x2="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#25af9a" />
              <stop offset="1" stop-color="#2d4b9a" />
            </linearGradient>
          </defs>
          <ellipse
            id="Ellipse_1"
            data-name="Ellipse 1"
            cx="175.5"
            cy="175"
            rx="175.5"
            ry="175"
            fill="url(#linear-gradient)"
          />
          <g
            id="Rectangle_1"
            data-name="Rectangle 1"
            transform="translate(70 73)"
            stroke="rgba(34,38,41,0)"
            stroke-width="1"
            fill="url(#linear-gradient)"
          >
            <rect width="281" height="277" stroke="none" />
            <rect x="0.5" y="0.5" width="280" height="276" fill="none" />
          </g>
          <g
            id="Path_6"
            data-name="Path 6"
            transform="translate(25 19)"
            fill="#04060f"
          >
            <path
              d="M150,0A150,150,0,1,1,0,150,150,150,0,0,1,150,0Z"
              stroke="none"
            />
            <path
              d="M 150 1 C 139.8898773193359 1 129.7864227294922 2.01849365234375 119.9702301025391 4.02716064453125 C 110.4040832519531 5.98468017578125 100.9944610595703 8.905609130859375 92.0028076171875 12.70877075195312 C 83.17414855957031 16.44296264648438 74.65884399414062 21.06491088867188 66.69338989257812 26.44625854492188 C 58.8033447265625 31.77664184570312 51.38388061523438 37.8983154296875 44.64111328125 44.64111328125 C 37.8983154296875 51.38388061523438 31.77664184570312 58.8033447265625 26.44625854492188 66.69338989257812 C 21.06491088867188 74.65884399414062 16.44296264648438 83.17414855957031 12.70877075195312 92.0028076171875 C 8.905609130859375 100.9944610595703 5.98468017578125 110.4040832519531 4.02716064453125 119.9702301025391 C 2.01849365234375 129.7864227294922 1 139.8898773193359 1 150 C 1 160.1101226806641 2.01849365234375 170.2135772705078 4.02716064453125 180.0297698974609 C 5.98468017578125 189.5959167480469 8.905609130859375 199.0055389404297 12.70877075195312 207.9971923828125 C 16.44296264648438 216.8258361816406 21.06491088867188 225.3411560058594 26.44625854492188 233.3066101074219 C 31.77664184570312 241.1966552734375 37.8983154296875 248.6161193847656 44.64111328125 255.35888671875 C 51.38388061523438 262.1016845703125 58.8033447265625 268.2233581542969 66.69338989257812 273.5537414550781 C 74.65884399414062 278.9350891113281 83.17414855957031 283.5570373535156 92.0028076171875 287.2912292480469 C 100.9944610595703 291.0943908691406 110.4040832519531 294.0153198242188 119.9702301025391 295.9728393554688 C 129.7864227294922 297.9815063476562 139.8898773193359 299 150 299 C 160.1101226806641 299 170.2135772705078 297.9815063476562 180.0297698974609 295.9728393554688 C 189.5959167480469 294.0153198242188 199.0055389404297 291.0943908691406 207.9971923828125 287.2912292480469 C 216.8258361816406 283.5570373535156 225.3411560058594 278.9350891113281 233.3066101074219 273.5537414550781 C 241.1966552734375 268.2233581542969 248.6161193847656 262.1016845703125 255.35888671875 255.35888671875 C 262.1016845703125 248.6161193847656 268.2233581542969 241.1966552734375 273.5537414550781 233.3066101074219 C 278.9350891113281 225.3411560058594 283.5570373535156 216.8258361816406 287.2912292480469 207.9971923828125 C 291.0943908691406 199.0055389404297 294.0153198242188 189.5959167480469 295.9728393554688 180.0297698974609 C 297.9815063476562 170.2135772705078 299 160.1101226806641 299 150 C 299 139.8898773193359 297.9815063476562 129.7864227294922 295.9728393554688 119.9702301025391 C 294.0153198242188 110.4040832519531 291.0943908691406 100.9944610595703 287.2912292480469 92.0028076171875 C 283.5570373535156 83.17414855957031 278.9350891113281 74.65884399414062 273.5537414550781 66.69338989257812 C 268.2233581542969 58.8033447265625 262.1016845703125 51.38388061523438 255.35888671875 44.64111328125 C 248.6161193847656 37.8983154296875 241.1966552734375 31.77664184570312 233.3066101074219 26.44625854492188 C 225.3411560058594 21.06491088867188 216.8258361816406 16.44296264648438 207.9971923828125 12.70877075195312 C 199.0055389404297 8.905609130859375 189.5959167480469 5.98468017578125 180.0297698974609 4.02716064453125 C 170.2135772705078 2.01849365234375 160.1101226806641 1 150 1 M 150 0 C 232.8426818847656 0 300 67.15730285644531 300 150 C 300 232.8426818847656 232.8426818847656 300 150 300 C 67.15730285644531 300 0 232.8426818847656 0 150 C 0 67.15730285644531 67.15730285644531 0 150 0 Z"
              stroke="none"
              fill="rgba(34,38,41,0)"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
