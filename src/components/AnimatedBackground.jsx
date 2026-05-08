export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-1 overflow-hidden hidden dark:block">
      <div className="bubble w-40 h-40 top-[10%] left-[15%] float1" />
      <div className="bubble w-46 h-46 top-[50%] left-[70%] float3 delay-2000" />
      <div className="bubble w-36 h-36 top-[70%] left-[30%] float2 delay-4000" />
      <div className="bubble w-45 h-45 top-[20%] left-[80%] float1 delay-3000" />
      <div className="bubble w-34 h-34 top-[80%] left-[60%] float2 delay-1000" />
      <div className="bubble w-42 h-42 top-[95%] left-[50%] float1 delay-4000" />
      <div className="bubble w-48 h-48 top-[30%] left-[60%] float3 delay-3000" />
    </div>
  )
}
