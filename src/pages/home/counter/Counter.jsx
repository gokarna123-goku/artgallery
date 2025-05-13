import React from 'react'
import RootLayout from '../../../layout/RootLayout'

const Counter = () => {
    return (
        <div className='w-full'>
            <RootLayout className={''}>
                <div className="w-full bg-neutral-900/20 border border-neutral-900/70 grid grid-cols-3 gap-10 divide-x divide-neutral-800/60 rounded-lg p-6">
                    <div className="w-full p-6 space-y-3 flex items-center justify-center flex-col text-center">
                        <div className="space-y-1">
                            <h1 className="text-6xl text-neutral-50 font-black leading-[1.1]">
                                10k+
                            </h1>
                            <p className="text-lg text-neutral-400 font-medium">
                                Artworks
                            </p>
                        </div>
                        <p className="text-sm text-neutral-400 font-medium">
                            Unique and captivating artworks from around the world.
                        </p>
                    </div>

                    <div className="w-full p-6 space-y-3 flex items-center justify-center flex-col text-center">
                        <div className="space-y-1">
                            <h1 className="text-6xl text-neutral-50 font-black leading-[1.1]">
                                500+
                            </h1>
                            <p className="text-lg text-neutral-400 font-medium">
                                Artists
                            </p>
                        </div>
                        <p className="text-sm text-neutral-400 font-medium">
                            Talented artists from around the world.
                        </p>
                    </div>

                    <div className="w-full p-6 space-y-3 flex items-center justify-center flex-col text-center">
                        <div className="space-y-1">
                            <h1 className="text-6xl text-neutral-50 font-black leading-[1.1]">
                                12
                            </h1>
                            <p className="text-lg text-neutral-400 font-medium">
                                Exhibitions
                            </p>
                        </div>
                        <p className="text-sm text-neutral-400 font-medium">
                            Annual curated shows featuring diverse artworks styles.
                        </p>
                    </div>
                </div>
            </RootLayout>
        </div>
    )
}

export default Counter