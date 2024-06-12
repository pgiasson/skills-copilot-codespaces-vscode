function skillsMember() {
    var member = {
        name: "Brendan Eich",
        age: 56,
        skills: ["JavaScript", "Rust", "C++"],
        showSkills: function () {
            this.skills.forEach(function (skill) {
                console.log(`${this.name} knows ${skill}`);
            }, this);
        }
    };
    member.showSkills();
}