var pet = parseInt(prompt("Select your pet\n1. Ferret (Hurón) or Cat\n2. Dogs\n3. Parrots"));

function petCost(pet) {
    switch (pet) {
        case 1:
            alert("For your pet you must pay 1$");
            break;
        case 2:
            alert("For your pet you must pay 1,5$");
            break;
        case 3:
            alert("For your pet you must pay 2$");
            break;
        default:
            alert("Pet not allowed");
            break;
    }
}
petCost(pet);