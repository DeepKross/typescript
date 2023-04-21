function updateObjectInArray<ObjectShape>(initialArray: ObjectShape[], key: string, value: number, patch: Partial<ObjectShape>) {
    let newkey = key as keyof ObjectShape;

    return initialArray.map((item: ObjectShape) => {
        if (item[newkey] === value) {
            return Object.assign({}, item, patch);
        }
        return item;
    });
}

type ObjectShape = {
    id: number;
    title: string;
    body: string;
}

const initialArray: ObjectShape[] = [
    { id: 1, title: "title1", body: "body1" },
    { id: 3, title: "title2", body: "body2" },
    { id: 3, title: "title3", body: "body3" },
    { id: 4, title: "title4", body: "body4" }];

const updatedArray = updateObjectInArray(initialArray, "id", 3,
    { title: "title3 updated", body: "body3 updated" });

console.log(updatedArray);