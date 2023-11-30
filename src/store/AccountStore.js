import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAccountStore = defineStore("account", () => {
    const employeeAccount = ref({
        id : 0,
        name : "",
        designation : "",
        reporting : "",
        email : "",
    });

    const changeName = (newName) => {
        employeeAccount.value.name = newName;
    }

    return {
        employeeAccount,
    };
})