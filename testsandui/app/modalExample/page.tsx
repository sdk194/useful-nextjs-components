import Modal from "@/components/modal";
import ModalContent from "@/app/modalExample/modalContent";
import {OpenModal} from "@/components/openModal";


export default async function Page(props: {
    searchParams?: Promise<{
        modal?: string;
    }>
}) {
    const searchParams = await props.searchParams;
    const showModal = searchParams?.modal === "true";

  return (
      <main>
        <div className="flex flex-row items-center justify-evenly w-screen">
          <p>Hello World</p>
            <OpenModal />
        </div>
          {showModal && (
              <Modal isVisible={showModal} prevLink="/modalExample" children={<ModalContent />} />
          )}
      </main>
  );
}
