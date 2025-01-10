function IconCard({ width = "24px", height = "24px", fill = "#e8eaed", pathFill = "#32006e" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960" fill={fill}>
      <path fill={pathFill} d="M360-160v-240q-83 0-141.5-58.5T160-600q0-83 58.5-141.5T360-800h360v80h-80v560h-80v-560H440v560h-80Z"/>
   </svg>
  );
}
export default IconCard;
