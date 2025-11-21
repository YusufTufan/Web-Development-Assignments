import { toast } from "sonner";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function showErrors(error: any) {
  if (error.response && error.response.data && error.response.data.message) {
    const messages = error.response.data.message;
    if (Array.isArray(messages)) {
      messages.forEach((m: string) => toast.error(m));
    } else {
      toast.error(messages);
    }
  } else {
    toast.error("Bir hata oluştu");
  }
}