import GameSavingLoader from "../js/GameSavingLoader";

test("should return correct object", () => {
    expect.assertions(1);
    const result = {
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: "Hitman",
            level: 10,
            points: 2000,
        },
    };
    
    return GameSavingLoader.load().then((saving) => {
        expect(saving).toEqual(result);
    });
});
