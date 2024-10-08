import Swal from "sweetalert2";

export const copyToClipboard = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Nomor Rekening Berhasil Di Salin!",
      });
      return true
      console.log("Text copied to clipboard:", textToCopy);
    } catch (err) {
        Swal.fire({
            icon: "error",
            title: "Gagal disalin, copy secara manual",
            text: `${err}`,
          });
        return false
      console.error("Error copying text to clipboard:", err);
    }
  };