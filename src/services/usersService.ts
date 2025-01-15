import { ApiInstance } from "@/app/api/instance";

const getUserData = async () => {
    try {
        const data = await ApiInstance(`/users`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { getUserData };