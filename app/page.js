
'use client';
import React from "react";
import Home from '@/components/home'
import Slider from '@/components/slider'
import PrivacyPolicy from '@/components/Privacy_Policy/privacy'
import Termsconditions from '@/components/Privacy_Policy/Terms'
import SecurityCom from '@/components/Privacy_Policy/security'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Page = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<SecurityCom/>} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
                <Route path="/ermsconditions" element={<Termsconditions/>} />

            </Routes>
        </BrowserRouter>
    );
};

export default Page;
