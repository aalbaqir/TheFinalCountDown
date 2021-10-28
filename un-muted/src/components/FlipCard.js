// import { useState } from "react";
// import cn from "classnames";

// function FlipCard(props) {
//     console.log(props)
//   const [showBack, setShowBack] = useState(false);

  
  
//   function handleClick() {
//     if (props.card.variant === "click") {
//       setShowBack(!showBack);
//     }
//   }

//   function handleFocus() { 
//     if (props.card.variant === "focus") { 
//       setShowBack(true); 
//     } 
//   } 

//   function handleBlur() { 
//     if (props.card.variant === "focus") { 
//       setShowBack(false); 
//     } 
//   } 

//   return (
//     <div
//       tabIndex={props.card.id} 
//       className={cn("flip-props.card-outer", { 
//         "focus-trigger": props.card.variant === "focus" 
//       })} 
//       onClick={handleClick}
//       onFocus={handleFocus} 
//       onBlur={handleBlur} 
//     >
//       <div
//         className={cn("flip-props.card-inner", {
//           showBack,
//           "hover-trigger": props.card.variant === "hover"
//         })}
//       >
//         <div className="card front">
//           <div className="card-body d-flex justify-content-center align-items-center">
//             <p className="card-text fs-1 fw-bold">{props.card.front}</p>
//           </div>
//         </div>
//         <div className="card back">
//           <div className="card-body d-flex justify-content-center align-items-center">
//             <p className="card-text fs-1 fw-bold">{props.card.back}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FlipCard;