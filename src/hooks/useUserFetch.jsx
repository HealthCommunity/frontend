import React, { useState, useEffect } from "react";

import axios from "axios";

function useUserFetch(initialForm) {
    const [userInfo, setuserInfo] = useState(null);

    useEffect(() => {
        axios.get(`/api/user`).then((res) => {
            setuserInfo(res.data.data);
        });
    }, []);
}
