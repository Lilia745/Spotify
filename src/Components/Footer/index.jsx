import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
    return (
        <footer>
            <div className="flex justify-between mt-[50px] p-[15px] gap-[20px] borders sm:flex-wrap sm:justify-around">
                <div className="flex flex-col">
                    <h2 className="text-[white] font-bold mb-[15px]">Компания</h2>
                    <a href="https://www.spotify.com/am/about-us/contact/" className="text-[#bbbaba] text-[17px] texts">О нас</a>
                    <a href="https://www.lifeatspotify.com/" className="text-[#bbbaba] text-[17px] texts">Вакансии</a>
                    <a href="https://newsroom.spotify.com/" className="text-[#bbbaba] text-[17px] texts">For the Record</a>
                </div>
                <div className=" w-[150px] flex flex-col">
                    <h2 className="text-[white] font-bold mb-[15px]">Сообщества</h2>
                    <p className="text-[#bbbaba] text-[17px] texts">Для исполнителей</p>
                    <p className="text-[#bbbaba] text-[17px] texts">Для разработчиков</p>
                    <p className="text-[#bbbaba] text-[17px] texts">Реклама</p>
                    <p className="text-[#bbbaba] text-[17px] texts">Для инвесторов</p>
                    <p className="text-[#bbbaba] text-[17px] texts">Для вендоров</p>
                </div>
                <div className=" w-[150px] flex flex-col">
                    <h2 className="text-[white] font-bold mb-[15px]">Полезные ссылки</h2>
                    <p className="text-[#bbbaba] text-[17px] texts">Справка</p>
                    <p className="text-[#bbbaba] text-[17px] texts">Бесплатное мобильное приложение</p>
                </div>
                <div className="w-[150px] flex flex-col">
                    <h2 className="text-[white] font-bold mb-[15px]">Планы Spotify</h2>
                    <a href="https://www.spotify.com/am/premium/?ref=spotifycom_footer_premium_individual" className=" texts text-[#bbbaba] text-[17px]">Индивидуальная подписка Spotify Premium</a>
                    <a href="https://www.spotify.com/am/duo/?ref=spotifycom_footer_premium_duo" className="texts text-[#bbbaba] text-[17px]">Premium для двоих</a>
                    <a href="https://www.spotify.com/am/family/?ref=spotifycom_footer_premium_family" className="texts text-[#bbbaba] text-[17px]">Premium для семьи</a>
                    <a href="https://www.spotify.com/am/student/?ref=spotifycom_footer_premium_student" className="texts text-[#bbbaba] text-[17px]">Premium для студентов</a>
                    <a href="https://www.spotify.com/am/free/?ref=spotifycom_footer_free" className="texts text-[#bbbaba] text-[17px]">
                        Бесплатная версия Spotify
                    </a>
                </div>
                <div className="flex justify-center gap-[10px]">
                <a href="https://www.instagram.com/spotify/">
                <SlSocialInstagram className="bg-[#0000003c] hover:bg-[#ffffff32] p-[7px] text-[white] w-[35px] h-[35px] cursor-pointer rounded-[15px] transition"/>
                </a>
                <a href="https://x.com/spotify">
                <FaTwitter className="bg-[#0000003c] hover:bg-[#ffffff32] p-[5px] text-[white] w-[35px] h-[35px] cursor-pointer rounded-[15px] transition"/>
                </a>
                <a href="https://www.facebook.com/Spotify">
                <FaFacebook className="bg-[#0000003c] hover:bg-[#ffffff32] p-[5px] text-[white] w-[35px] h-[35px] cursor-pointer rounded-[15px] transition"/>
                </a>
                </div>
            </div>
            <div className=" mt-[30px]">
                <a href="https://www.spotify.com/am/legal/end-user-agreement/" className="text-[#959595] hover:text-[white] transition mr-[15px]">Юридическая информация</a>
                <a href="https://www.spotify.com/am/safetyandprivacy" className="text-[#959595] hover:text-[white] transition mr-[15px]">Центр безопасности и конфиденциальности</a>
                <a href="https://www.spotify.com/am/legal/privacy-policy/" className="text-[#959595] hover:text-[white] transition mr-[15px]">Политика конфиденциальности</a>
                <a href="https://www.spotify.com/am/legal/cookies-policy/" className="text-[#959595] hover:text-[white] transition mr-[15px]">Файлы cookie</a>
                <a href="https://www.spotify.com/am/legal/privacy-policy/#s3" className="text-[#959595] hover:text-[white] transition mr-[15px]">О рекламе</a>
                <a href="https://www.spotify.com/am/accessibility" className="text-[#959595] hover:text-[white] transition mr-[15px]">Специальные возможности</a>
                <p className="texts text-[#bababa] hover:text-[white] transition mr-[15px]">© 2024 Spotify AB</p>
            </div>
        </footer>
    )
}

export default Footer