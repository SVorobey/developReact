import { MainPage } from "@pages/mainPage";
import { CalendarEgar } from "@widgets/calendar";
import { Route, Routes } from "react-router-dom";

export const Router = () => (
    <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/calendar' element={<CalendarEgar  />} />
    </Routes>
)