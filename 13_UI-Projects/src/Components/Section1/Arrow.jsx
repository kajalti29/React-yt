import React from 'react'
import { MoveUpRight } from 'lucide-react'

const Arrow = () => {
  return (
    <div className="p-6">
      {/* Bottom Arrow */}
      <button className="flex items-center gap-2">
        <MoveUpRight size={72} strokeWidth={1.5} />
      </button>
    </div>
  )
}

export default Arrow
