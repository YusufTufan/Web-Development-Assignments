import React from 'react';
import { Card, Button, Avatar } from 'flowbite-react';
import { KisiBilgileri } from '../types/PortfolioData'; 
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'; 

interface ProfileCardProps {
    personalInfo: KisiBilgileri;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ personalInfo }) => {
    return (
        <Card className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-xl border-t-4 border-cyan-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                
                <div className="col-span-1 flex flex-col items-center">
                    <Avatar 
                        img={personalInfo.fotografUrl} 
                        size="xl" 
                        rounded 
                        bordered
                        className="mb-4"
                    />
                    
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {personalInfo.ad} {personalInfo.soyad}
                    </h5>
                    <p className="font-normal text-cyan-600 dark:text-cyan-400 mb-4">
                        {personalInfo.unvan}
                    </p>

                    <div className="flex space-x-3 mt-4">
                        <Button  as="a" href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" color="blue" size="sm">
                            LinkedIn
                        </Button>
                        <Button  as="a" href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" color="gray" size="sm">
                            GitHub
                        </Button>
                    </div>
                </div>

                <div className="col-span-2 space-y-3">
                    <h6 className="text-xl font-semibold border-b pb-2 mb-4 text-gray-700 dark:text-gray-300">İletişim Bilgileri</h6>
                    
                    <p className="flex items-center text-gray-700 dark:text-gray-400">
                        <HiMail className="mr-2 h-5 w-5 text-cyan-500" />
                        <span className="font-semibold">E-posta:</span> {personalInfo.email}
                    </p>
                    <p className="flex items-center text-gray-700 dark:text-gray-400">
                        <HiPhone className="mr-2 h-5 w-5 text-cyan-500" />
                        <span className="font-semibold">Telefon:</span> {personalInfo.telefon}
                    </p>
                    <p className="flex items-center text-gray-700 dark:text-gray-400">
                        <HiLocationMarker className="mr-2 h-5 w-5 text-cyan-500" />
                        <span className="font-semibold">Adres:</span> {personalInfo.adres}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default ProfileCard;