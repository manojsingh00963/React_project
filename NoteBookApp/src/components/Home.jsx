import Notes from "./Notes";

function Home({showAlert}) {

  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  )
}

export default Home;