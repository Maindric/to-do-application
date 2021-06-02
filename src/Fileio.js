import React, { useState, useEffect} from "react"

export const SaveJson = (obj) => {
    useEffect(() => {
        const json = JSON.stringify(obj);
        localStorage.setItem("items", json);
    }, [obj]);
}
