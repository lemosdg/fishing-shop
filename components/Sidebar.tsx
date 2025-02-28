"use client";

import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
	const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
		menu1: false,
		menu2: false,
	});

	const toggleMenu = (menu: string) => {
		setOpenMenus((prev) => ({
			...prev,
			[menu]: !prev[menu],
		}));
	};

	return (
		<aside className="w-64 ml-16 bg-blue-500">
			<nav>
				<ul className="py-10 px-5">
					<li>
						<button
							className="w-full text-left py-2 px-3 bg-neutral-200 hover:bg-gray-600 "
							onClick={() => toggleMenu("menu1")}
						>
							📁 Menú 1
						</button>
						{openMenus.menu1 && (
							<ul className="pl-4">
								<li>
									<Link
										href="#"
										className="block py-1 px-2 bg-sky-400 hover:bg-gray-700 "
									>
										Submenú 1-1
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="block py-1 px-2 bg-sky-400 hover:bg-gray-700 "
									>
										Submenú 1-2
									</Link>
								</li>
							</ul>
						)}
					</li>

					<li>
						<button
							className="w-full text-left py-2 px-3 bg-neutral-200 hover:bg-gray-600 "
							onClick={() => toggleMenu("menu2")}
						>
							📁 Menú 2
						</button>
						{openMenus.menu2 && (
							<ul className="pl-4">
								<li>
									<Link
										href="#"
										className="block py-1 px-2 bg-sky-400 hover:bg-gray-700 "
									>
										Submenú 2-1
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="block py-1 px-2 bg-sky-400 hover:bg-gray-700 "
									>
										Submenú 2-2
									</Link>
								</li>
							</ul>
						)}
					</li>

					<li>
						<Link
							href="#"
							className="block py-2 px-3 bg-neutral-200 hover:bg-gray-600 "
						>
							📁 Menú sin submenú
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
