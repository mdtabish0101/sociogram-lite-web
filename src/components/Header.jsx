import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
const Header = () => {

    const location = useLocation();
    const [showMenu, setShowMenu] = useState(true);
    const menuItmes = [
        {
            title: "Home",
            path: "/",
            id: '1'
        },
        {
            title: "Add Post",
            path: "/addpost",
            id: "2"
        },
        {
            title: "Shares",
            path: "/shares",
            id: '3'
        },
        {
            title: "Profile",
            path: "/profile",
            id: '4'
        },

    ]


    return (
        <div className='p-4 bg-secondary rounded-b-sm'>
            {
                showMenu && (
                    <div className='md:flex justify-end hidden bg-secondary'>
                        <IoMdMenu size={30} color='#FFFEFE'
                            className='bg-transparent cursor-pointer'
                            onClick={() => setShowMenu(false)} />
                    </div>
                )
            }


            <div className='flex items-center justify-between bg-secondary'>

                <h1 className={`font-sociogram text-4xl bg-secondary pt-3 text-accent font-semibold ${showMenu ? '-mt-8':'-mt-32'}`}>Sociogram</h1>

                {/* web view */}
                <div className='flex space-x-10 justify-end bg-transparent items-center font-sociogram md:hidden'>
                    {menuItmes.map((item) => {
                        return <Link to={`${item.path}`} key={item.id} className={`text-primary transition-all 
                        ${item.path === location.pathname ? 'bg-primary text-tertiary font-semibold rounded py-[3px] px-2 opacity-85' : 'bg-inherit  hover:opacity-55'}`}
                            onClick={() => setShowMenu(false)}>
                            {item.title}</Link>
                    })}
                </div>

                {/* mobile view */}
                {!showMenu && (
                    <div className='md:flex space-x-10 justify-end bg-transparent font-sociogram flex-col items-end space-y-5 hidden'>
                        {menuItmes.map((item) => {
                            return <Link to={`${item.path}`} key={item.id}
                                className={`text-primary transition-all 
                        ${item.path === location.pathname ? 'bg-primary text-tertiary font-semibold rounded py-[3px] px-2 opacity-85' : 'bg-inherit'}`}>
                                {item.title}</Link>
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header