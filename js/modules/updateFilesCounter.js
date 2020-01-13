export default function filesCounter() {
    const counters = {
        files_counter: document.querySelector('#files_counter'),
        errors_counter: document.querySelector('#errors_counter')
    }
    
    const real_results = {
        success_transfer: document.querySelectorAll('.df-success').length,
        error_transfer: document.querySelectorAll('.df-error').length
    }

    const all_files = document.querySelectorAll('.df_preview').length;
   
    counters.files_counter.textContent = `${real_results.success_transfer} / ${all_files} files sent`;
    counters.errors_counter.textContent = `${real_results.error_transfer} errors`;
}         