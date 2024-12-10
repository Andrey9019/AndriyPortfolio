// import React, { useState } from 'react';
// import { ImageWithFade } from '../../ui/ImageWithFade';

// export const AboutProjectCard = ({ projectContent }) => {
//   const [hover, setHover] = useState(false);

//   return (
//     <>
//       {projectContent.links.map((link, linkIndex) => (
//         <a
//           key={linkIndex}
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="py-2 rounded transition-colors no-underline w-full h-full duration-200"
//         >
//           <div
//             className="relative flex flex-col mx-auto bg-white shadow-md rounded-lg overflow-hidden p-4 transition-all ease-in-out duration-300"
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//           >
//             <div className="w-full rounded-lg transition-transform duration-300 ease-in-out text-center">
//               <ImageWithFade
//                 src={projectContent.image.mobileSrc}
//                 srcSet={`${projectContent.image.mobileSrc} 500w, ${projectContent.image.desktopSrc} 1000w`}
//                 sizes="(max-width: 768px) 500px, 1000px"
//                 alt={`Screenshot of the ${projectContent.heading} project`}
//                 className="rounded-lg"
//               />
//               <div
//                 className={`absolute inset-0 bg-white bg-opacity-90 p-4 transition-opacity duration-300 ease-in-out flex flex-col justify-between ${
//                   hover ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <p className="text-[#5851db] text-2xl font-bold mb-2 sm:text-xl">
//                   {projectContent.heading}
//                 </p>
//                 <p className="text-xl md:text-4xl lg:text-xl mb-4">
//                   {projectContent.description}
//                 </p>
//                 <div className="flex space-x-4 text-[#333333] text-4xl font-bold mb-2 md:text-6xl lg:text-4xl">
//                   {projectContent.skills.map((SkillIcon, skillIndex) => (
//                     <SkillIcon key={skillIndex} />
//                   ))}
//                 </div>
//               </div>
//               <h4 className="text-[#5851db] text-lg font-bold mt-4 sm:text-2xl">
//                 {projectContent.heading}
//               </h4>
//             </div>
//           </div>
//         </a>
//       ))}
//     </>
//   );
// };

// export default AboutProjectCard;
