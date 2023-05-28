import { writable } from 'svelte/store';

export const isModalQuestionOpen = writable(false);

type Question = {
    type: string;
    entry: string;
}

function addBilan(initialBilan: Question[] = []) {
    const { subscribe, update } = writable<Question[]>(initialBilan);

    function addQuestion(question: Question) {
        update((bilan) => [...bilan, question]);
    }

    function removeQuestion(question: Question) {
        update((bilan) => bilan.filter((q) => q !== question));
    }

    function editQuestion(question: Question, newQuestion: Question) {
        update((bilan) => bilan.map((q) => q === question ? newQuestion : q));
    }

    return {
        addQuestion,
        removeQuestion,
        editQuestion,
        subscribe
    };
}

export const bilan = addBilan();
