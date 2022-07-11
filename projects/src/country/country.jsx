import axios from "axios";
import React from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import { useState } from "react";
import NavCountry from "./NavCountry/NavCountry";
import HomeCountry from "./homeCountry/homeCountry";
import InCountry from "./inCountry/inCountry";





function Country() {
    return (
        <div className="country">
           <NavCountry />
           <Routes>
            <Route path="/" element={<HomeCountry />} />
            <Route path="in-country/:id" element={<InCountry />} />
           </Routes>
        </div>
    )
}
export default Country;