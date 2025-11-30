"use client"

export function AboutStats() {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#F9F9F9] p-10 rounded-3xl h-80 flex flex-col justify-between group hover:bg-gray-100 transition-colors">
                <span className="text-gray-400 text-sm font-medium">/01</span>
                <div>
                    <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-3 tracking-tight">139</h2>
                    <p className="text-gray-500 font-medium">We're honored to have</p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F9F9F9] p-10 rounded-3xl h-80 flex flex-col justify-between group hover:bg-gray-100 transition-colors">
                <span className="text-gray-400 text-sm font-medium">/02</span>
                <div>
                    <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-3 tracking-tight">4.9/5</h2>
                    <p className="text-gray-500 font-medium">Average User Rating</p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F9F9F9] p-10 rounded-3xl h-80 flex flex-col justify-between group hover:bg-gray-100 transition-colors">
                <span className="text-gray-400 text-sm font-medium">/03</span>
                <div>
                    <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-3 tracking-tight">901</h2>
                    <p className="text-gray-500 font-medium">Happy Clients</p>
                </div>
            </div>
        </div>
    )
}
