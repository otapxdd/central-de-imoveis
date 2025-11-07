// ========================================
// MÓDULO DE UPLOAD DE IMAGENS
// Gerencia drag & drop e preview de imagens
// ========================================

function inicializarUploadImagens() {
  const dropZone = document.getElementById("drop-zone")
  const fileInput = document.getElementById("file-upload")
  const previewArea = document.getElementById("image-preview-area")

  if (!dropZone || !fileInput || !previewArea) return

  let filesToUpload = new DataTransfer()

  dropZone.addEventListener("click", (e) => {
    const label = e.target.closest('label[for="file-upload"]')
    if (label) {
      return
    }
    fileInput.click()
  })

  function processFiles(newFiles) {
    const tiposPermitidos = ["image/png", "image/jpeg", "image/jpg", "image/webp"]
    const tamanhoMaximo = 2 * 1024 * 1024 // 2MB em bytes

    ;[...newFiles].forEach((file) => {
      // Valida tipo de arquivo
      if (!tiposPermitidos.includes(file.type)) {
        if (typeof mostrarNotificacao === "function") {
          mostrarNotificacao(
            `O arquivo "${file.name}" não é um formato permitido. Use PNG, JPG ou WebP.`,
            "erro"
          )
        } else {
          alert(`O arquivo "${file.name}" não é um formato permitido. Use PNG, JPG ou WebP.`)
        }
        return
      }

      // Valida tamanho do arquivo
      if (file.size > tamanhoMaximo) {
        const tamanhoMB = (file.size / (1024 * 1024)).toFixed(2)
        if (typeof mostrarNotificacao === "function") {
          mostrarNotificacao(
            `O arquivo "${file.name}" é muito grande (${tamanhoMB}MB). Tamanho máximo: 2MB.`,
            "erro"
          )
        } else {
          alert(`O arquivo "${file.name}" é muito grande (${tamanhoMB}MB). Tamanho máximo: 2MB.`)
        }
        return
      }

      filesToUpload.items.add(file)
      createPreview(file)
    })
    fileInput.files = filesToUpload.files
  }

  fileInput.addEventListener("change", (e) => {
    processFiles(e.target.files)
  })
  ;["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, preventDefaults, false)
  })

  function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
  }
  ;["dragenter", "dragover"].forEach((eventName) => {
    dropZone.addEventListener(
      eventName,
      () => {
        dropZone.classList.add("drag-over")
      },
      false,
    )
  })
  ;["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(
      eventName,
      () => {
        dropZone.classList.remove("drag-over")
      },
      false,
    )
  })

  dropZone.addEventListener(
    "drop",
    (e) => {
      const dt = e.dataTransfer
      const files = dt.files
      processFiles(files)
    },
    false,
  )

  function createPreview(file) {
    const reader = new FileReader()

    reader.onload = (e) => {
      const previewItem = document.createElement("div")
      previewItem.className = "preview-item"
      previewItem.dataset.fileName = file.name

      const img = document.createElement("img")
      img.src = e.target.result
      img.className = "img-preview"
      img.alt = file.name

      const removeBtn = document.createElement("button")
      removeBtn.className = "remove-btn"
      removeBtn.innerHTML = "&times;"

      removeBtn.addEventListener("click", () => {
        removeFile(file.name)
        previewItem.remove()
      })

      previewItem.appendChild(img)
      previewItem.appendChild(removeBtn)
      previewArea.appendChild(previewItem)
    }

    reader.readAsDataURL(file)
  }

  function removeFile(fileName) {
    const newFilesToUpload = new DataTransfer()

    for (let i = 0; i < filesToUpload.files.length; i++) {
      const file = filesToUpload.files[i]
      if (file.name !== fileName) {
        newFilesToUpload.items.add(file)
      }
    }

    filesToUpload = newFilesToUpload
    fileInput.files = filesToUpload.files
  }

  window.limparPreviewImagens = () => {
    try {
      filesToUpload = new DataTransfer()
      fileInput.value = ""
      fileInput.files = filesToUpload.files
      if (previewArea) previewArea.innerHTML = ""
      if (dropZone) dropZone.classList.remove("drag-over")
    } catch (e) {
      console.warn("Erro ao limpar preview de imagens:", e)
    }
  }
}
