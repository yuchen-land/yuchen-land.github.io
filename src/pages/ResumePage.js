// src/pages/ResumePage.js
import React from 'react';
import Profile from '../components/Profile';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import HonorsAwards from '../components/HonorsAwards';
import AdditionalInformation from '../components/AdditionalInformation';
import Projects from '../components/Projects';
import Skills from '../components/Skills'; // 導入技能區塊
import resumeData from '../data/resumeData'; // 導入數據

function ResumePage() {
    return (
        <main className="container">
            <Profile data={resumeData.profile} />
            <WorkExperience data={resumeData.experience} />
            <Skills data={resumeData.skills} /> {/* 技能區塊 */}
            <Projects data={resumeData.projects} /> {/* 專案區塊放在這裡 */}
            <Education data={resumeData.education} />
            <HonorsAwards data={resumeData.honorsAwards} />
            <AdditionalInformation data={resumeData.additionalInformation} />
        </main>
    );
}

export default ResumePage;