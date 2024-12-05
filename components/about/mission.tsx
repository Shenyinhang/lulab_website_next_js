/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-12-03 22:35:00
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-04 19:26:31
 * @FilePath: /lulab_website_next_js/components/about/mission.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
"use client";

export function Mission() {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">关于我们</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div className="p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">使命</h3>
                        <p className="text-gray-600 text-lg text-center leading-relaxed">
                            通过项目式学习和创新教育，培养具备全球视野、创新精神与实践能力的复合型人才，帮助年轻学子实现非常规的自我实现。
                        </p>
                    </div>
                </div>

                <div className="p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">愿景</h3>
                        <p className="text-gray-600 text-lg text-center leading-relaxed">
                            打造一个有情怀的网上斯坦福大学，推动教育变革，为现代社会培养能够应对未来挑战的创新型人才。
                        </p>
                    </div>
                </div>

                <div className="p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">培养目标</h3>
                        <p className="text-gray-600 text-lg text-center leading-relaxed">
                            培养具备全球视野、创新精神和实践能力的复合型人才，通过项目式学习和实践，让学生在真实问题中探索兴趣与特长，快速明确职业方向。强调实践优先、终身学习和团队协作，帮助学员实现非常规自我发展与职业突破，同时推动教育公平与社会进步，为未来培养创新型精英。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 